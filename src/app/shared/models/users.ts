import {User} from './user';

export interface Users {
  page ?: number;
  per_page ?: number;
  total ?: number;
  total_pages ?: number;
  data ?: Array<User>;
}
