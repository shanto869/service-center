import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Fitness Cube`;
    }, [title])
}

export default useTitle;