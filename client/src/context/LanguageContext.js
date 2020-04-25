import React, { createContext } from 'react';


let map = new Map();
map.set('English', 'en');
map.set('Russian', 'ru');
map.set('Italian', 'it');
map.set('Spanish', 'es');
map.set('French', 'fr');
map.set('German', 'de');
map.set('Arabic', 'ar');

const langaugeMap = map;

const LanguageContextSetter = {
    setLanguageContext: (req) => {
        return map.get(req.item);
    }
}


export const LanguageContext = createContext(LanguageContextSetter.setLanguageContext);
