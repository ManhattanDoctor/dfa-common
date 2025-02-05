import { IHlfSettings, IKeycloakSettings } from "../../settings";

export interface IConfigDtoResponse {
    hlf: IHlfSettings;
    keycloak: IKeycloakSettings;
}