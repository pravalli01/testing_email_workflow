### Prerequisites

Move into helm folder

> DB_PASSWORD= 

> REG_PASSWORD=  # docker registry password

> STAGE= dev | qa | prod | demo

1. Create namespace

    ```sh
    kubectl create ns $STAGE
    ```

2. Create docker secret
    ```sh
    kubectl create secret docker-registry regcred \
        --docker-server=https://index.docker.io/v1/ \
        --docker-username=cloud4students \
        --docker-password=$REG_PASSWORD \
        -n $STAGE
    ```

### Install portal frontend:

1. Validate chart:
    ```sh
    helm lint frontend/
    ```

2. Install/Upgrade helm chart:
    ```sh
    helm upgrade --install frontend frontend/ -f frontend/values-$STAGE.yaml -n $STAGE
    ```

3. Uninstall helm chart
    ```sh
    helm uninstall frontend -n $STAGE
    ```
