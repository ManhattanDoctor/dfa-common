export interface IConfigDtoResponse {
    hlf: IHlfConfig;
    keycloak: IKeycloakConfig;
}

export interface IKeycloakConfig {
    url: string;
    realm: string;
    clientId: string;
    realmPublicKey: string;
}

export interface IHlfConfig {
    name: string;
    endpoint: string;
}