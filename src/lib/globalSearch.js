const pageComponents = 
    [{
        type: 'Molecules',
        pages: [
            {
                name: "People",
                link: '/'
            }
        ]
    }
]

const getGlobalSearchItems = (filterValue) => {
    const result = pageComponents.map(type => {
       return { ...type, pages: type.pages.filter(page => page.name.includes(filterValue)) }
    })
    return result
}

export default getGlobalSearchItems
