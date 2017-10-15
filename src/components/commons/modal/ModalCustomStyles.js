export const ModalCustomStyles = {
  overlay: {
    zIndex : 999,
    backgroundColor : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    borderRadius : 0,
    textAlign: 'center'
  },
  modalClose: {
    WebkitAppearance: 'none',
    border: 0,
    display: 'block',
    width: 'auto',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'rgb(230, 230, 230)',
    textTransform: 'uppercase',
    margin: '10px auto 0 auto',
    padding: '7px 10px'
  },
  modalImage: {
    cursor: 'pointer'
  }
};