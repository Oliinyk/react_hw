import React from 'react';

import { HotelCards } from '../src/atomic/template/index.js';
import { HotelsContextProvider } from '../src/atomic/organisms/context/HotelsContext.js';

export default function Apartments() {
  return (
    <HotelsContextProvider>
      <HotelCards />
    </HotelsContextProvider>
  );
}
