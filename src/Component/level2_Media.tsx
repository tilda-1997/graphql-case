import * as React from 'react'
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
        value: 'title',
        label: 'title',
        children: [
            {
                value: 'romaji',
                label: 'romaji',
            },
            {
                value: 'native',
                label: 'native',
            },
        ],
    },
    {
        value: 'genres',
        label: 'genres',
    },
    {
        value: 'season',
        label: 'season',
    },
]

const MediaOption = () => {

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

export default MediaOption