import { notify } from 'react-notify-toast'

const popupStyles = { background: '#fbcb46', text: '#000' }
const favoriteStyle = { background: '#ff595e', text: '#000' }
const wishlistStyle = { background: '#ffca3a', text: '#000' }

export const popupSuccess = message => {
  notify.show(message, 'success', 3000)
}

export const popupWarning = message => {
  notify.show(message, 'warning', 3000)
}

export const popupError = message => {
  notify.show(message, 'error', 3000)
}

export const popupFavorite = message => {
  notify.show(message, 'custom', 1000, favoriteStyle)
}

export const popupWishlist = message => {
  notify.show(message, 'custom', 1000, wishlistStyle)
}

export const popupCustom = message => {
  notify.show(message, 'custom', 3000, popupStyles)
}