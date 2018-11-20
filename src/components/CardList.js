import React from 'react';
import Card from './Card';

const CardList = ({db}) => {
    return (
        <div>
            {
                db.map((user, i) => {
                    return (
                        <Card
                            key={db[i].id}
                            id={db[i].id}
                            name={db[i].name}
                            email={db[i].email}
                        />
                    );
                })
            }
        </div>
    )
};

export default CardList