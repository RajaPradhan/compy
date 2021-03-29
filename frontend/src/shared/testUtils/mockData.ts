import { Company, Speciailty } from 'shared/types';

const description =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';
export const companies: Company[] = [
  {
    id: '01F1CPNKBSZB15BHHB7DN9X601',
    name: 'Construction Delta Inc.',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Excavation,
      Speciailty.Architecture,
      Speciailty.Electrical,
      Speciailty.Plumbing,
    ],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X602',
    name: 'Constructopedia GmbH',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Excavation,
      Speciailty.Architecture,
      Speciailty.Electrical,
    ],
    city: 'Hamburg',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X603',
    name: 'Builders Pavilion Inc.',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [Speciailty.Excavation, Speciailty.Plumbing],
    city: 'Munich',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X604',
    name: 'Builders Combat',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [Speciailty.Electrical, Speciailty.Architecture],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X605',
    name: 'Garrison & Garrison Bros. Inc.',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Excavation,
      Speciailty.Architecture,
      Speciailty.Electrical,
      Speciailty.Plumbing,
    ],
    city: 'Cologne',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X606',
    name: 'Alpha Construction Inc.',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Excavation,
      Speciailty.Architecture,
      Speciailty.Plumbing,
    ],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X607',
    name: 'Construction Delta',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [Speciailty.Excavation, Speciailty.Architecture],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X608',
    name: 'Lehman Construction GmbH',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Architecture,
      Speciailty.Electrical,
      Speciailty.Plumbing,
    ],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X609',
    name: 'Builders Muse',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [Speciailty.Excavation, Speciailty.Plumbing],
    city: 'Berlin',
    description,
  },
  {
    id: '01F1CPNKBSZB15BHHB7DN9X610',
    name: 'Pro Constructors Inc.',
    logoUrl: 'http://placekitten.com/500/500',
    specialities: [
      Speciailty.Excavation,
      Speciailty.Architecture,
      Speciailty.Electrical,
      Speciailty.Plumbing,
    ],
    city: 'Berlin',
    description,
  },
];
