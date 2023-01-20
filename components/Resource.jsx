import React from 'react'
import Link from 'next/link';

const Resource = ({ resource }) => (
    <div>
        <h1>
            <Link href={`{resources.resourceLink}`}>Title</Link>
        </h1>
        <p>{resources.resourceDescription}</p>
    </div>
);

export default Resource