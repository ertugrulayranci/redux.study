const initialState = {
  category: [],
  sayi: 0,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    //ekleme aksiyonu dispatch edildiği anda çalışır
    case "ADD_CATEGORY": //ACTİONLAR BÜYÜK HARFLE YAZILIR
      console.log("ekleme calıstı");
    case "DELETE_CATEGORY":
      console.log("silme calıstı");
    //case'lerden hiçbiri çalışmazsa:
    default:
      return state;
  }
};

export default categoryReducer;
