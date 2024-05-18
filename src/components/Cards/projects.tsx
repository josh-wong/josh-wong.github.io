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

const CardsProfessionalProjects = [
  {
    name: 'PRO SAMPLE 1',
    // image: '<LINK_TO>.png',
    url: {
      page: '/professional/',
    },
    description: (
      <Translate id="professional.XXX.description">
        PLACEHOLDER
      </Translate>
    ),
  },
  {
    name: 'PRO SAMPLE 2',
    // image: '<LINK_TO>.png',
    url: {
      page: '/professional/',
    },
    description: (
      <Translate id="professional.XXX.description">
        PLACEHOLDER
      </Translate>
    ),
  },
  {
    name: 'PRO SAMPLE 3',
    // image: '<LINK_TO>.png',
    url: {
      page: '/professional/',
    },
    description: (
      <Translate id="professional.XXX.description">
        PLACEHOLDER
      </Translate>
    ),
  },
  {
    name: 'PRO SAMPLE 4',
    // image: '<LINK_TO>.png',
    url: {
      page: '/professional/',
    },
    description: (
      <Translate id="professional.XXX.description">
        PLACEHOLDER
      </Translate>
    ),
  },
];

const CardsPersonalProjects = [
  {
    name: 'Bitcoin Cash Node on a Raspberry Pi',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://www.080f53.com/bitcoin-cash-node-on-raspberry-pi',
    },
    description: (
      <Translate id="personal.raspiBch.description">
        Tutorials for setting up a Bitcoin Cash Node on a Raspberry Pi running Ubuntu Desktop
      </Translate>
    ),
  },
  {
    name: 'Microsoft Zune device and software setup',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://www.080f53.com/zune-software-setup',
    },
    description: (
      <Translate id="personal.zuneSetup.description">
        Tutorial for how to connect a Microsoft Zune device to the Zune software on Windows 10 or later
      </Translate>
    ),
  },
  {
    name: 'passGen',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://www.080f53.com/passGen',
    },
    description: (
      <Translate id="personal.passgen.description">
        Lightweight Windows app for creating randomly generated, 10-character passwords
      </Translate>
    ),
  },
  {
    name: 'Signal sticker pack - "Why Bitcoin Cash?"',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://signal.art/addstickers/#pack_id=183a3ca8d7ccdcdb8fa7728b17453fbc&pack_key=e9ac42b0e7276edd92d293321d2e51cca64e5744bad567fd9579b51abb78773d',
    },
    description: (
      <Translate id="personal.signalStickersBch.description">
        Created a Signal sticker pack based on the Why Bitcoin Cash? brand assets.
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
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="button.readMore">Read more</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardRowProfessionalProjects(): JSX.Element {
  return (
    <div className="row">
      {CardsProfessionalProjects.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}

export function CardRowPersonalProjects(): JSX.Element {
  return (
    <div className="row">
      {CardsPersonalProjects.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}
