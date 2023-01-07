import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props){
   return (
        <div>
            <Head title={props.title} />
            <h1>{props.description}</h1>
        </div>
    );
}