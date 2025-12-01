import React from 'react';
import { Heart, Shield, Users, Lightbulb, Smile } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';

export const Values: React.FC = () => {
    const valuesList = [
        { icon: Lightbulb, title: 'Sencillez', description: 'Sin complicaciones innecesarias.' },
        { icon: Shield, title: 'Transparencia', description: 'Hablamos claro y directo.' },
        { icon: Users, title: 'Cercanía', description: 'Siempre accesibles para ti.' },
        { icon: Heart, title: 'Calidad humana', description: 'Cuidamos de ti y de los tuyos.' },
        { icon: Smile, title: 'Adaptabilidad', description: 'Nos ajustamos a tus necesidades.' },
    ];

    return (
};
