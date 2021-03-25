import * as React from 'react'
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
        value: 'name',
        label: 'name',
        children: [
            {
                value: 'romaji',
                label: 'romaji',
            },
            {
                value: 'full',
                label: 'full',
            },
        ],
    },
    {
        value: 'image',
        label: 'image',
        children: [
            {
                value: 'large',
                label: 'large'
            }
        ]
    },
    {
        value: 'edges',
        label: 'edges',
        children: [
            {
                value: 'characterRole',
                label: 'characterRole'
            }
        ]
    },
    {
        value: 'nodes',
        label: 'nodes',
        children: [
            {
                value:'title',
                label:'title',
                children: [
                    {
                        value: 'native',
                        label: 'native'
                    }
                ]
            },
            {
                value:'type',
                label:'type'
            },
        ]

    }
    
]

const CharacterOption = () => {

    const [ checked, setChecked ] = React.useState([] as string[])
    const [ expanded, setExpanded ] = React.useState([] as string[])

    return(
        <>
        <CheckboxTree
                checked={checked}
                expanded={expanded}
                nodes={nodes}
                onCheck={(checked) => setChecked(checked) }
                onExpand={(expanded) => setExpanded(expanded)}
            />
        </>
    )
}

export default CharacterOption