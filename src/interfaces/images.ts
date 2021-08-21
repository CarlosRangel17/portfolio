export interface CustomImage {
  [key: string]: {
    src: string
    width: string
    height: string
    enableMobileDimensions?: boolean
    darkSrc?: string
  }
}
