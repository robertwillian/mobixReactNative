import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PokemonAbout from '../PokemonAbout';
import PokemonEvolution from '../PokemonEvolution';
import PokemonStatus from '../PokemonStatus';

const Tab = createMaterialTopTabNavigator();

interface Props {
    pokemon?: string;
    tintColor: string;
}

const PokemonInfo: React.FC<Props> = ({pokemon, tintColor}) => {
    

    return (
        <Tab.Navigator screenOptions={{
            tabBarIndicatorStyle: {
                backgroundColor: tintColor
            }
        }}>
            <Tab.Screen name="PokemonAbout" children={() => <PokemonAbout pokemonName={pokemon} />} options={{title: "Sobre"}} />
            <Tab.Screen name="PokemonStatus" children={() => <PokemonStatus pokemonName={pokemon} />} options={{title: "Status"}} />
            <Tab.Screen name="PokemonEvolution" component={PokemonEvolution} options={{title: "Evolução"}} />
        </Tab.Navigator>
    );
}

export default PokemonInfo;