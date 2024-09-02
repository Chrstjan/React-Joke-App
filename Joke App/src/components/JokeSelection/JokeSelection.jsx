export const JokeSelection = ({categories, selectCategoey}) => {
    const handleCategorySelect = (e) => {
        let category = e.target.value;
        selectCategoey(category);
    }
    return (
        <>
            <span>
                <select onChange={(e) => handleCategorySelect(e)}>
                    {categories.map((category) => {
                        return (
                            <>
                                <option value={category}>{category}</option>
                            </>
                        )
                    })}
                </select>
            </span>
        </>
    )
}