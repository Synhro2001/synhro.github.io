import { useEffect, useState } from "react";

const useTypewriter  = (texts: string[], delay: number) => {

    const [text, setText] = useState(' ')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [loop, setLoot] = useState(0)

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[loop % texts.length]
            const updatedText = isDeleting ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

            setText(updatedText)

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), delay);   
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false)
                setLoot(loop + 1)
            }

        };

        const timer = setTimeout(handleTyping, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timer);


    }, [text, isDeleting, delay, loop, texts])
    return text
}

export default useTypewriter;