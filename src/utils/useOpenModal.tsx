import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  setIsShowing: Function
  closeBtnRef?: any
}

const useOpenModal = ({ isOpen, setIsShowing, closeBtnRef }: Props) => {
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (isOpen) {
      setIsShowing(true)
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      if (closeBtnRef.current !== null) {
        closeBtnRef.current.focus()
      }
    } else {
      setIsShowing(false)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])
}

export default useOpenModal
