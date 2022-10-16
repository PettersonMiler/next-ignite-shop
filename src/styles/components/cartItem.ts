import { styled } from "..";

export const ProductContainer = styled('div', {
  display: 'flex',
  marginTop: 25
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  marginRight: 20,
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 400
  },

  span: {
    marginTop: '2px',
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 700
  },

  a: {
    marginTop: 'auto',
    fontSize: '$md',
    fontWeight: 700,
    color: '$green500',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300'
    }
  },
})
