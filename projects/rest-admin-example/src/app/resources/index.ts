import { address } from './address';
// import { person } from "./person";
import { town } from './town';
import { user } from './user';
import { country } from './country';
import { currency } from './currency';
import { packageContent } from './packageContent';
import { packageType } from './packageType';
import { _package } from './package';
import { expeditionRequest } from './expeditionRequest';
import { consolidator } from './consolidator';
import { agency } from './agency';
import { enterprise } from './enterprise';

export const resources = [
  address,
  // auth,
  // person,
  user,
  country,
  town,
  enterprise,
  currency,
  expeditionRequest,
  packageContent,
  packageType,
  _package,
  consolidator,
  agency,
  // partType,
].sort((a, b) => a.name.localeCompare(b.name));

// GROUPS : SEPERATOR
/**
 * 1-CLIENTS,
 * -address,
 * -contact,
 * -country,
 * person,
 * 7-OTHERS
 * chat : main,
 * disclaimer,
 * chatUser,
 * invitation,
 * message,
 * suggestion,
 * town,
 *
 * 8-ACL
 * user,
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
