// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export type ProductProps = {
  id: number;
  name: string;
  brand: string;
  score: number;
  price: number;
  capsuleAmount: number;
  isInPack: boolean;
  hasPrecaution: boolean;
  hasSynergy?: boolean;
  healthGoals?: {
    score: number;
  }[];
  symptoms?: {
    score: number;
  }[];
};

import { NextApiRequest, NextApiResponse } from "next";

export default function product(
  request: NextApiRequest,
  response: NextApiResponse<ProductProps[]>
) {
  // Database request
  const productList = [
    {
      id: 4100,
      name: "Coq10",
      brand: "NOW",
      score: 75,
      price: 100,
      capsuleAmount: 90,
      isInPack: true,
      healthGoals: [
        {
          score: 25,
        },
        {
          score: 75,
        },
        {
          score: 100,
        },
      ],
      symptoms: [
        {
          score: 100,
        },
        {
          score: 50,
        },
        {
          score: 50,
        },
      ],
      hasPrecaution: false,
    },
    {
      id: 4101,
      name: "L-Glutamine 500mg Free Form 60vcap",
      brand: "NOW",
      score: 88,
      price: 13.99,
      capsuleAmount: 60,
      isInPack: true,
      healthGoals: [],
      symptoms: [
        {
          score: 50,
        },
      ],
      hasPrecaution: false,
    },
    {
      id: 4102,
      name: "Boswellia Extract Plus Turmeric Root Extract",
      brand: "NOW",
      score: 82,
      price: 21.99,
      capsuleAmount: 60,
      isInPack: true,
      healthGoals: [
        {
          score: 75,
        },
        {
          score: 100,
        },
      ],
      symptoms: [
        {
          score: 50,
        },
      ],
      hasPrecaution: false,
    },
    {
      id: 4103,
      name: "100% Pur Huile Essentielle de Basilic",
      brand: "NOW",
      score: 72,
      price: 39.9,
      capsuleAmount: 180,
      isInPack: true,
      healthGoals: [
        {
          score: 25,
        },
      ],
      symptoms: [
        {
          score: 50,
        },
      ],
      hasPrecaution: true,
    },
    {
      id: 4104,
      name: "100% Pur Huile Essentielle de Basilic",
      brand: "NOW",
      score: 72,
      price: 39.9,
      capsuleAmount: 180,
      isInPack: true,
      healthGoals: [],
      symptoms: [
        {
          score: 50,
        },
      ],
      hasPrecaution: true,
    },
    {
      id: 4105,
      name: "Germe de Bl, 16 fl oz (473 ml)",
      brand: "NOW",
      score: 72,
      price: 39.9,
      capsuleAmount: 20,
      isInPack: true,
      healthGoals: [
        {
          score: 75,
        },
        {
          score: 25,
        },
      ],
      symptoms: [
        {
          score: 25,
        },
      ],
      hasPrecaution: true,
    },
    {
      id: 4106,
      name: "Essential Huile, Lemongrass Huile - 30 ml",
      brand: "NOW",
      score: 72,
      price: 59.9,
      capsuleAmount: 30,
      isInPack: true,
      healthGoals: [],
      symptoms: [
        {
          score: 100,
        },
      ],
      hasPrecaution: false,
    },
    {
      id: 4107,
      name: "Vein Supreme 90 Glules de Veg",
      brand: "NOW",
      score: 65,
      price: 8.9,
      capsuleAmount: 30,
      isInPack: false,
      healthGoals: [
        {
          score: 75,
        },
        {
          score: 25,
        },
      ],
      symptoms: [
        {
          score: 25,
        },
      ],
      hasPrecaution: false,
    },
    {
      id: 4108,
      name: "Cholestrol Support 90",
      brand: "NOW",
      score: 42,
      price: 17.8,
      capsuleAmount: 120,
      isInPack: false,
      healthGoals: [
        {
          score: 25,
        },
        {
          score: 25,
        },
      ],
      symptoms: [],
      hasPrecaution: true,
    },
    {
      id: 4109,
      name: "Cal-Mag With B-Complex And Vitamin C",
      brand: "NOW",
      score: 21,
      price: 13.99,
      capsuleAmount: 100,
      isInPack: false,
      healthGoals: [],
      symptoms: [
        {
          score: 25,
        },
      ],
      hasPrecaution: true,
    },
  ];
  return response.status(200).json(productList);
}
