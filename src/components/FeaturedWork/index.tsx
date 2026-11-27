import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
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
  roles: WorkRole[];
  secondaryAction?: string;
  secondaryHref?: string;
  tags: string[];
  title: string;
}

interface RoleFilterProps {
  className?: string;
}

interface RoleSectionProps {
  children: ReactNode;
}

interface FeaturedWorkSectionProps {
  children: ReactNode;
}

const RoleContext = createContext<WorkRoleFilter>('all');

const roleOptions: Array<{label: string; value: WorkRoleFilter}> = [
  {label: 'All work', value: 'all'},
  {label: 'AI', value: 'ai'},
  {label: 'Documentation', value: 'documentation'},
  {label: 'DevOps', value: 'devops'},
  {label: 'Product', value: 'product'},
  {label: 'Security', value: 'security'},
];

function readRoleFromUrl(): WorkRoleFilter {
  if (typeof window === 'undefined') {
    return 'all';
  }

  const role = new URLSearchParams(window.location.search).get('role');
  return roleOptions.find((option) => option.value === role)?.value ?? 'all';
}

function containsRole(children: ReactNode, role: WorkRole): boolean {
  return Children.toArray(children).some((child) => {
    if (!isValidElement<{children?: ReactNode; roles?: WorkRole[]}>(child)) {
      return false;
    }

    return (
      child.props.roles?.includes(role) ||
      containsRole(child.props.children, role)
    );
  });
}

export function RoleDirectory({children}: RoleDirectoryProps) {
  const [role, setRole] = useState<WorkRoleFilter>('all');

  useEffect(() => {
    const syncRole = () => setRole(readRoleFromUrl());
    syncRole();
    window.addEventListener('popstate', syncRole);

    return () => window.removeEventListener('popstate', syncRole);
  }, []);

  return (
    <RoleContext.Provider value={role}>
      {children}
    </RoleContext.Provider>
  );
}

export function RoleFilter({className}: RoleFilterProps) {
  const role = useContext(RoleContext);

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
    roleOptions.find((option) => option.value === role)?.label?.replace(/^All/, 'all') ?? 'all work';

  return (
    <div className={clsx(styles.roleFilter, className)}>
      <p className={styles.roleFilterLabel}>View work for</p>
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
        Showing {activeLabel}
      </p>
    </div>
  );
}

export function RoleSection({children}: RoleSectionProps) {
  const role = useContext(RoleContext);

  if (role !== 'all' && !containsRole(children, role)) {
    return null;
  }

  return <section className={styles.roleSection}>{children}</section>;
}

export function FeaturedWorkSection({children}: FeaturedWorkSectionProps) {
  const role = useContext(RoleContext);

  if (role !== 'all' && !containsRole(children, role)) {
    return null;
  }

  return <section className={styles.featuredSection}>{children}</section>;
}

export function FeaturedWorkGrid({children}: FeaturedWorkGridProps) {
  return <div className={styles.grid}>{children}</div>;
}

export function WorkCard({
  action,
  category,
  description,
  featured = false,
  href,
  roles,
  secondaryAction,
  secondaryHref,
  tags,
  title,
}: WorkCardProps) {
  const role = useContext(RoleContext);

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
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
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
        </div>
      </div>
    </article>
  );
}
