import { environment as environment} from '../../environments/environment'

export abstract class ApiBaseService{
    protected api = environment.api;
    protected host = environment.host
}