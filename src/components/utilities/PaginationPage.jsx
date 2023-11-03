const PaginationPage = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const HandleNextPage = () => {
        setPage((prevState) => prevState + 1)   
        scrollTop()    
    }

    const HandlePrevPage = () => {
        setPage((prevState) => prevState - 1) 
        scrollTop()      
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl text-color-primary">
            <button onClick={HandlePrevPage} className="hover:text-color-accent transition-all">Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={HandleNextPage} className="hover:text-color-accent transition-all">Next</button>
        </div>
    )
}

export default PaginationPage