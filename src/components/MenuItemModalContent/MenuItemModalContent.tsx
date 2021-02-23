import React from 'react';

type Props = {
  menuItems: {
    data: {
      itemDescription: string;
      price: number;
      sectionUuid: string;
      subsectionUuid: string;
      title: string;
      uuid: string;
      customizationsList: any[];
      imageUrl: string;
    }
  };
}

export const MenuItemModalContent = ({ menuItems }: Props) => {
  const { data } = menuItems;

  console.log(data);

  return (
    <>
      <img src={data && data.imageUrl} alt="Img"/>

      <h1>{data && data.title}</h1>

     <p>
      {data && data.itemDescription}
     </p>
    </>
  );
}

