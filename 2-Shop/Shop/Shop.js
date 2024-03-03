function shop(array)
{
    'use strict';

    const numsOfProducts = parseInt(array[0]);
    const productsList = [];
    const commands = [];

    for(let i = 1; i <= numsOfProducts; i++)
    {
        productsList.push(array[i]);
    }

    for(let i = numsOfProducts + 1; i <= array.length; i++)
    {
        commands.push(array[i]);
    }

    for(let command of commands)
    {
        if(command.split(' ')[0] === "Sell")
        {
            if(productsList.length > 0)
            {
                let removedProduct = productsList.shift();
                console.log(`${removedProduct} product sold! `)
            }
        }
        else if (command.split(' ')[0] === "Add")
        {
            productsList.push(command.split(' ')[1]);
        }
        else if(command.split(' ')[0] === "Swap")
        {
            const firstProduct = parseInt(command.split(' ')[1]);
            const secondProducr = parseInt(command.split(' ')[2]);

            if(isNaN(firstProduct) || firstProduct > 0 || firstProduct >= productsList.length ||
            isNaN(secondProducr) || secondProducr > 0 || secondProducr >= productsList.length)
            {
                continue;
            }
                        
            const productToSwap = productsList[firstProduct];
            productsList[firstProduct] = productsList[secondProducr];
            productsList[secondProducr] = productToSwap;

            console.log('Swapped!')
        }
        else if(command.split(' ')[0] === "End")
        {
            break;
        }
        else
        {
            continue;
        }
    }

    if (productsList.length == 0)
    {
        console.log(`The shop is empty`);
    }
    else
    {
        console.log(`Products left: ${productsList.join(', ')}`);
    }

    
    //console.log(commands.join(' '));
}

shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'End', 'Swap 0 1']);

shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']);

shop(['3', 'Shampoo', 'Soap', 'Toothpaste', 'Sell', 'Sell', 'Sell', 'End']);