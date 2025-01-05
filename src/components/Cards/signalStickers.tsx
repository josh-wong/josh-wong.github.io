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

const CardsSignalStickers = [
  {
    name: '1950s-60s Blue Note jazz musicians🎷',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://signal.art/addstickers/#pack_id=b406d0f0636508c14222022baa9af677&pack_key=e0641dcf015b9bc27ebbbf6795fc90076e697702221f68e8c74afc0e86332539',
    },
    description: (
      <Translate id="personal.signalStickersBlueNotePrivateSide.description">
        Stickers based on photos in the article "A Blue Note Founder's View of Jazz Music's Private Side"
      </Translate>
    ),
  },
  {
    name: 'Why Bitcoin Cash?🪙',
    // image: '<LINK_TO>.png',
    url: {
      page: 'https://signal.art/addstickers/#pack_id=183a3ca8d7ccdcdb8fa7728b17453fbc&pack_key=e9ac42b0e7276edd92d293321d2e51cca64e5744bad567fd9579b51abb78773d',
    },
    description: (
      <Translate id="personal.signalStickersBch.description">
        Stickers based on the "Why Bitcoin Cash" brand assets
      </Translate>
    ),
  },
  // // Card template
  // {
  //   name: 'TITLE', // Change this to the title of the Signal sticker pack.
  //   // image: '<LINK_TO>.png',
  //   url: {
  //     page: 'URL', // Change this to the Signal sticker pack URL.
  //   },
  // //   description: (
  // //     <Translate id="personal.zuneSetup.description">
  // //       ADD DESCRIPTION ABOUT THE SIGNAL STICKER PACK
  // //     </Translate>
  // //   ),
  // },
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
        <Link>
          <div className="card__body">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </Link>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="button.readMore">Install</Translate>
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

export function CardRowSignalStickers(): JSX.Element {
  return (
    <div className="row">
      {CardsSignalStickers.map((special) => (
        <Card key={special.name} {...special} />
      ))}
    </div>
  );
}
