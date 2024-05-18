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

const CardsSocial = [
  {
    name: 'Bandcamp',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://bandcamp.com/080f53',
    },
    description: (
      <Translate id="social.bandcamp.description">

      </Translate>
    ),
  },
  {
    name: 'GitHub',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://github.com/josh-wong',
    },
    description: (
      <Translate id="social.github.description">

      </Translate>
    ),
  },
  {
    name: 'LinkedIn',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://www.linkedin.com/in/wongjoshua',
    },
    description: (
      <Translate id="social.linkedin.description">
        
      </Translate>
    ),
  },
  {
    name: 'Mastodon',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://famichiki.jp/@josh',
    },
    description: (
      <Translate id="social.masatadon.description">
        
      </Translate>
    ),
  },
  {
    name: 'Steam',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://steamcommunity.com/id/hex080f53',
    },
    description: (
      <Translate id="social.steam.description">
        
      </Translate>
    ),
  },
  {
    name: 'Twitter',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://twitter.com/080f53',
    },
    description: (
      <Translate id="social.twitter.description">
        
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  // image: string;
  url: {
    page?: string;
  };
  // description: JSX.Element;
}

function Card({ name, /*image,*/ url, /*description*/ }: Props) {
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
            {/* <p>{description}</p> */}
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

export function CardRowSocial(): JSX.Element {
  return (
    <div className="row">
      {CardsSocial.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}

