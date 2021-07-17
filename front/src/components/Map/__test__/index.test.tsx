import { render} from '@testing-library/react';


import FavoritesMap from '../index';

describe("Map Fetching data",()=>{

    test('Fetching and rendering Countries',()=>{
          render(<FavoritesMap />)
    })
})