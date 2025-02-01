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

const CardsPassGen = [
  {
    name: 'passGen v3.4',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://github.com/josh-wong/passGen/releases/download/v3.4.0/passGen_installer.exe',
    },
    description: (
      <Translate id="buttons.passgenDownload.description">

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
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="button.download">Download</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardRowPassGen(): JSX.Element {
  return (
    <div className="row">
      {CardsPassGen.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}

