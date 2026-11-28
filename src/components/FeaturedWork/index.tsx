import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export type WorkRole =
  | 'ai'
  | 'documentation'
  | 'devops'
  | 'product'
  | 'security';

type WorkRoleFilter = WorkRole | 'all';

interface RoleDirectoryProps {
  children: ReactNode;
}

interface FeaturedWorkGridProps {
  children: ReactNode;
}

interface WorkCardProps {
  action: string;
  category: string;
  description: string;
  featured?: boolean;
  href: string;
  myRole?: string;
  roles: WorkRole[];
  secondaryAction?: string;
  secondaryHref?: string;
  tags: string[];
  tertiaryAction?: string;
  tertiaryHref?: string;
  title: string;
}

interface RoleFilterProps {
  className?: string;
}

interface RoleSectionProps {
  children: ReactNode;
  id: string;
  title: string;
}

interface RoleResultsProps {
  children: ReactNode;
}

interface FeaturedWorkSectionProps {
  children: ReactNode;
}

interface ProjectCounts {
  matching: number;
  total: number;
}

const RoleContext = createContext<WorkRoleFilter>('all');
const ProjectCountsContext = createContext<ProjectCounts>({matching: 0, total: 0});
const CardRegistryContext = createContext<(roles: string) => () => void>(
  () => () => {},
);

const roleOptions: Array<{label: string; value: WorkRoleFilter}> = [
  {label: 'All work', value: 'all'},
  {label: 'AI', value: 'ai'},
  {label: 'Content strategy', value: 'documentation'},
  {label: 'DevOps', value: 'devops'},
  {label: 'Apps and games', value: 'product'},
  {label: 'Security', value: 'security'},
];

function readRoleFromUrl(): WorkRoleFilter {
  if (typeof window === 'undefined') {
    return 'all';
  }

  const role = new URLSearchParams(window.location.search).get('role');
  return roleOptions.find((option) => option.value === role)?.value ?? 'all';
}

export function RoleDirectory({children}: RoleDirectoryProps) {
  const [role, setRole] = useState<WorkRoleFilter>('all');
  // Each card registers its roles as a comma-joined string so the filter
  // status can report counts without the page data being duplicated.
  const [registeredCardRoles, setRegisteredCardRoles] = useState<string[]>([]);

  const registerCard = useCallback((cardRoles: string) => {
    setRegisteredCardRoles((current) => [...current, cardRoles]);

    return () =>
      setRegisteredCardRoles((current) => {
        const index = current.indexOf(cardRoles);
        return current.filter((_, position) => position !== index);
      });
  }, []);

  const counts = useMemo<ProjectCounts>(
    () => ({
      total: registeredCardRoles.length,
      matching: registeredCardRoles.filter(
        (cardRoles) => role === 'all' || cardRoles.split(',').includes(role),
      ).length,
    }),
    [registeredCardRoles, role],
  );

  useEffect(() => {
    const syncRole = () => setRole(readRoleFromUrl());
    syncRole();
    window.addEventListener('popstate', syncRole);

    return () => window.removeEventListener('popstate', syncRole);
  }, []);

  return (
    <RoleContext.Provider value={role}>
      <CardRegistryContext.Provider value={registerCard}>
        <ProjectCountsContext.Provider value={counts}>
          {children}
        </ProjectCountsContext.Provider>
      </CardRegistryContext.Provider>
    </RoleContext.Provider>
  );
}

export function RoleFilter({className}: RoleFilterProps) {
  const role = useContext(RoleContext);
  const {matching, total} = useContext(ProjectCountsContext);

  const selectRole = (nextRole: WorkRoleFilter) => {
    const url = new URL(window.location.href);
    if (nextRole === 'all') {
      url.searchParams.delete('role');
    } else {
      url.searchParams.set('role', nextRole);
    }
    window.history.pushState({}, '', url);

    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const activeLabel =
    role === 'all'
      ? 'all work'
      : roleOptions.find((option) => option.value === role)?.label;
  const countSummary =
    total === 0
      ? ''
      : role === 'all'
        ? ` (${total} projects)`
        : ` (${matching} of ${total} projects)`;

  return (
    <div className={clsx(styles.roleFilter, className)}>
      <p className={styles.roleFilterLabel}>Filter by focus area</p>
      <div
        className={styles.roleFilterOptions}
        role="group"
        aria-label="Filter work by role">
        {roleOptions.map((option) => (
          <button
            type="button"
            className={styles.roleFilterButton}
            aria-pressed={role === option.value}
            key={option.value}
            onClick={() => selectRole(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
      <p className={styles.roleFilterStatus} aria-live="polite">
        Showing {activeLabel}{countSummary}
      </p>
    </div>
  );
}

// A filtered view is one flat grid of matching cards, so fixed section
// headings never describe cards that belong to a different section.
export function RoleResults({children}: RoleResultsProps) {
  const role = useContext(RoleContext);

  return <div className={role === 'all' ? undefined : styles.grid}>{children}</div>;
}

export function RoleSection({children, id, title}: RoleSectionProps) {
  const role = useContext(RoleContext);

  if (role !== 'all') {
    return <>{children}</>;
  }

  return (
    <section className={styles.roleSection}>
      <Heading as="h2" id={id}>
        {title}
      </Heading>
      {children}
    </section>
  );
}

export function FeaturedWorkSection({children}: FeaturedWorkSectionProps) {
  const role = useContext(RoleContext);

  if (role !== 'all') {
    return <>{children}</>;
  }

  return (
    <section className={styles.featuredSection}>
      <Heading as="h2" id="featured-work">
        Featured work
      </Heading>
      {children}
    </section>
  );
}

export function FeaturedWorkGrid({children}: FeaturedWorkGridProps) {
  const role = useContext(RoleContext);

  if (role !== 'all') {
    return <>{children}</>;
  }

  return <div className={styles.grid}>{children}</div>;
}

export function WorkCard({
  action,
  category,
  description,
  featured = false,
  href,
  myRole,
  roles,
  secondaryAction,
  secondaryHref,
  tags,
  tertiaryAction,
  tertiaryHref,
  title,
}: WorkCardProps) {
  const role = useContext(RoleContext);
  const registerCard = useContext(CardRegistryContext);
  const cardRoles = roles.join(',');

  useEffect(() => registerCard(cardRoles), [registerCard, cardRoles]);

  if (tags.length > 4) {
    throw new Error(`${title} has ${tags.length} tags; WorkCard allows up to 4.`);
  }

  if (role !== 'all' && !roles.includes(role)) {
    return null;
  }

  return (
    <article className={clsx('card', styles.card)}>
      <div className={styles.visual} data-category={category}>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
        <span className={styles.categoryLabel}>{category}</span>
      </div>
      <div className={clsx('card__body', styles.body)}>
        <Heading as={role === 'all' ? 'h3' : 'h2'} className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
        {myRole && <p className={styles.myRole}>My role: {myRole}</p>}
        <ul className={styles.tags} aria-label={`${title} topics`}>
          {tags.map((tag) => (
            <li key={tag}>
              <span className={styles.tag}>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={clsx('card__footer', styles.footer)}>
        <div className={styles.actions}>
          <Link
            className={clsx('button button--primary button--sm', styles.action)}
            to={href}
            aria-label={`${action}: ${title}`}>
            {action}
            <span aria-hidden="true">&rarr;</span>
          </Link>
          {secondaryAction && secondaryHref && (
            <Link
              className={clsx('button button--secondary button--sm', styles.action)}
              to={secondaryHref}
              aria-label={`${secondaryAction}: ${title}`}>
              {secondaryAction}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          {tertiaryAction && tertiaryHref && (
            <Link
              className={clsx('button button--secondary button--sm', styles.action)}
              to={tertiaryHref}
              aria-label={`${tertiaryAction}: ${title}`}>
              {tertiaryAction}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
