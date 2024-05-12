/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const CardsRow = [
  {
    // name: '',
    // image: '<LINK_TO>.png',
    url: {
      page: 'creative/',
    },
    description: (
      <Translate id="projects.creative.description">
        Overview
      </Translate>
    ),
  },
  {
    // name: '',
    // image: '<LINK_TO>.png',
    url: {
      page: 'notes/',
    },
    description: (
      <Translate id="projects.notes.description">
        Implementation
      </Translate>
    ),
  },
  {
    // name: '',
    // image: '<LINK_TO>.png',
    url: {
      page: 'scripts/',
    },
    description: (
      <Translate id="projects.scripts.description">
        Getting started with ScalarDL
      </Translate>
    ),
  },
  {
    // name: '',
    // image: '<LINK_TO>.png',
    url: {
      page: 'software/',
    },
    description: (
      <Translate id="projects.software.description">
        Getting started with ScalarDL Auditor
      </Translate>
    ),
  },
  {
    // name: '',
    // image: '<LINK_TO>.png',
    url: {
      page: 'tutorials/',
    },
    description: (
      <Translate id="projects.tutorials.description">
        Bank account application
      </Translate>
    ),
  },
];

interface Props {
  // name: string;
  // image: string;
  url: {
    page?: string;
  };
  description: JSX.Element;
}

function Card({ name, /*image,*/ url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          {/* <Link to={url.page}>
            <img src={image}></img>}
          </Link> */}
        </div>
        <Link to={url.page}>
          <div className="card__body">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </Link>
        {/* <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="button.readMore">Read more</Translate>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export function CardsRow(): JSX.Element {
  return (
    <div className="row">
      {CardsRow.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}
