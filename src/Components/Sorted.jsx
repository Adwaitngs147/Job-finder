function Sorted() {
    return (
        <>
            <div className="sorted">
                <h3>Sorted By:</h3>

                <label>
                    <input
                        type="checkbox"
                        name="sort"
                        value="programming"
                    />
                    Programming
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="sort"
                        value="programming"
                    />
                    Data Science
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="sort"
                        value="programming"
                    />
                    Designing
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="sort"
                        value="programming"
                    />
                    Networking
                </label>
            </div>
            
        </>
    );
}
export default Sorted;