export const data = {
  Argentina: [
    {
      id: 1,
      title: 'Plan Básico',
      priceMensual: 12000,
      discount: 0.1,
      features: ['1 CPU', '1 GB RAM', '20 GB SSD'],
    },
    {
      id: 2,
      title: 'Plan Estándar',
      priceMensual: 15000,
      discount: 0.15,
      features: ['2 CPU', '2 GB RAM', '40 GB SSD'],
    },
    {
      id: 3,
      title: 'Plan Premium',
      priceMensual: 20000,
      discount: 0.2,
      features: ['2 CPU', '4 GB RAM', '80 GB SSD'],
    },
  ],
  Brasil: [
    {
      id: 1,
      title: 'Plan Básico',
      priceMensual: 18000,
      discount: 0.1,
      features: ['1 CPU', '1 GB RAM', '20 GB SSD'],
    },
    {
      id: 2,
      title: 'Plan Estándar',
      priceMensual: 25000,
      discount: 0.15,
      features: ['2 CPU', '2 GB RAM', '40 GB SSD'],
    },
    {
      id: 3,
      title: 'Plan Premium',
      priceMensual: 30000,
      discount: 0.2,
      features: ['2 CPU', '4 GB RAM', '80 GB SSD'],
    },
  ],
  Chile: [
    {
      id: 1,
      title: 'Plan Básico',
      priceMensual: 18000,
      discount: 0.1,
      features: ['1 CPU', '1 GB RAM', '20 GB SSD'],
    },
    {
      id: 2,
      title: 'Plan Estándar',
      priceMensual: 25000,
      discount: 0.15,
      features: ['2 CPU', '2 GB RAM', '40 GB SSD'],
    },
    {
      id: 3,
      title: 'Plan Premium',
      priceMensual: 30000,
      discount: 0.2,
      features: ['2 CPU', '4 GB RAM', '80 GB SSD'],
    },
  ],
  'Estados Unidos': [
    {
      id: 1,
      title: 'Plan Básico',
      priceMensual: 15000,
      discount: 0.1,
      features: ['1 CPU', '1 GB RAM', '20 GB SSD'],
    },
    {
      id: 2,
      title: 'Plan Estándar',
      priceMensual: 20000,
      discount: 0.15,
      features: ['2 CPU', '2 GB RAM', '40 GB SSD'],
    },
    {
      id: 3,
      title: 'Plan Premium',
      priceMensual: 25000,
      discount: 0.2,
      features: ['2 CPU', '4 GB RAM', '80 GB SSD'],
    },
  ],
};

export const getPrice = (priceMensual, discount) => {
  return (priceMensual - (priceMensual * discount)).toFixed(2);
};