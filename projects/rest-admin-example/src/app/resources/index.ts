import { address } from './address';
// import { person } from "./person";
import { town } from './town';
import { user } from './user';
import { country } from './country';
// import { enterprise } from "./enterprise";
// import { contact } from "./contact";
// import { consolidator } from "./consolidator";
// import { container } from "./container";
// import { bill } from "./bill";
import { currency } from './currency';
// import { stock } from "./stock";
// import { vehicule } from "./vehicule";
// import { vehiculePart } from "./vehiculePart";
// import { vehiculeOrder } from "./vehiculeOrder";
// import { travel } from "./travel";
// import { billItem } from "./billItem";
// import { cart } from "./cart";
// import { brand } from "./brand";
// import { cartItem } from "./cartItem";
// import { category } from "./category";
// import { categoryProduct } from "./categoryProduct";
// import { product } from "./product";
// import { chat } from "./chat";
// import { chatUser } from "./chatUser";
// import { comment } from "./comment";
// import { consolidatorUser } from "./consolidatorUser";
// import { eventTypeGift } from "./eventTypeGift";
// import { invitation } from "./invitation";
// import { message } from "./message";
import { packageContent } from './packageContent';
import { packageType } from './packageType';
import { _package } from './package';
// import { partType } from "./partType";
// import { partTypeVehiculeModels } from "./partTypeVehiculeModels";
// import { paymentMethod } from "./paymentMethod";
// import { personnalDocument } from "./personnalDocument";
// import { priceRange } from "./priceRange";
// import { payment } from "./payment";
// import { registry } from "./registry";
// import { reservation } from "./reservation";
// import { tripReason } from "./tripReason";
// import { auth } from "./auth";
// import { giftRegistry } from "./giftRegistry";
// import { gift } from "./gift";
// import { flight } from "./flight";
import { expeditionRequest } from './expeditionRequest';
// import { eventType } from "./eventType";
// import { _event } from "./event";
// import { Disclaimer } from "./Disclaimer";
// import { destination } from "./destination";
// import { permission } from "./permission";
// import { delivery } from "./delivery";
// import { service } from "./service";
// import { serviceProvider } from "./serviceProvider";
// import { serviceProviderService } from "./serviceProviderService";
// import { productSupportedTown } from "./productSupportedTown";
// import { tripScheduleTripService } from "./tripScheduleTripService";
// import { tripSchedule } from "./tripSchedule";
// import { question } from "./question";
// import { questionUser } from "./questionUser";
// import { verifications } from "./verifications";
// import { vehiculeModel } from "./vehiculeModel";

export const resources = [
  // address,
  // auth,
  // person,
  user,
  country,
  town,
  // enterprise,
  // contact,
  // container,
  // consolidator,
  // bill,
  // Disclaimer,
  // destination,
  // currency,
  // expeditionRequest,
  // eventType,
  // _event,
  // stock,
  // vehiculePart,
  // // vehiculeOrder,
  // vehicule,
  // vehiculeModel,
  // travel,
  // billItem,
  // brand,
  // cart,
  // cartItem,
  // category,
  // categoryProduct,
  // chat,
  // chatUser,
  // comment,
  // consolidatorUser,
  // delivery,
  // eventTypeGift,
  // invitation,
  // giftRegistry,
  // gift,
  // flight,
  // message,
  // packageContent,
  // packageType,
  // _package,
  // partType,
  // partTypeVehiculeModels,
  // paymentMethod,
  // payment,
  // permission,
  // personnalDocument,
  // priceRange,
  // product,
  // reservation,
  // registry,
  // tripReason,
  // service,
  // serviceProvider,
  // serviceProviderService,
  // productSupportedTown,
  // tripScheduleTripService,
  // tripSchedule,
  // question,
  // questionUser,
  // verifications,
].sort((a, b) => a.name.localeCompare(b.name));

// GROUPS : SEPERATOR
/**
 * 1-CLIENTS, 
 * -address,
 * -contact,
 * -country,
 * -enterprise,
 * -expeditionRequest,
 * package,
 * packageContent,
 * packageType,
 * passwordReset, //en attente
 * person,
 * personnalDocument,

 * 2-CONSOLIDATORS, 
 * consolidator : main, 
 * consolidatorUser,
 * container,consolidatorRequest,
 * flight,
 * priceRange,
 * 
 * 3-GIFT_REGISTRY, 
 * event :main,
 * eventType,
 * eventTypeGift,
 * eventTypeService,
 * gift,
 * giftRegistry,
 * registry,
 * service,
 * serviceProvider,
 * serviceProviderService,
 * 
 * 4-STORE, 
 * -bill,
 * -billItem,
 * -cart,
 * -cartItem,
 * -category,
 * -categoryProduct,
 * -delivery,
 * -deliveryItem,
 * payment,
 * paymentMethod,
 * product,
 * productSupportedTown,
 * searchItem,
 * stock
 * 
 * 5-TRAVEL
 * comment : is Main for configure priority, 
 * destination, reservation, travel, tripReason, 
 * tripSchedule, tripServic, tripScheduletripService, 
 * 
 * 6-CAR_PART
 * -brand : main,
 * -partType
 * partTypeVehiculeModels,
 * vehicule, 
 * 
 * 
 * vehiculeModel,
 * vehiculePart
 * 
 * 7-OTHERS
 * chat : main,
 * disclaimer,
 * chatUser,
 * invitation,
 * message,
 * question,
 * questionUser,
 * suggestion,
 * town,
 * 
 * 8-ACL
 * permission : main,
 * role,
 * user,
 * verification
 * 
 * 
 * 
 * AJOUR
 * -theme
 * 
 * person (add email)
 * user( status: all_status, ) : introuvable
 * addresses
 * is_active(sur les menus),
 * chat_user (add user_id),
 * select_perPage
 * 
 * scrool horizontal
 * disable (fields code)
 * has_many (user-addre) : pas possible
 * has_one (person -user)
 * has_many(package, packageContent)
 * has_many (package, expeditionRequest)
 * has_many (consolidator, user) -userresquest, containerrequest
 * registery (gift)
 * tchat(user)
 * travel(expeditionsRequest, pricerange)
 * 
 * 
 * 
 * 
 * belong_many(registry, gift)
 * 
 * 
 * morph:(type(app model container), id)))
 * 
 * 'new','enabled','disabled'
 */
