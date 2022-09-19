

/* import MapboxGL from "@rnmapbox/maps"; */
/* MapboxGL.setAccessToken("pk.eyJ1Ijoiam91dG8iLCJhIjoiY2wwaDB0aGJ4MDJ3YzNjcndtZ2JyM3NxdyJ9.ImMrVeiT_7jxnKKUKZ6nIg");
MapboxGL.setConnected(true); */
import { StyleSheet, View } from "react-native";

const Map = () => {
    const styles = StyleSheet.create({
        page: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF"
        },
        container: {
          height: 300,
          width: 300,
          backgroundColor: "tomato"
        },
        map: {
          flex: 1
        }
      });

    return (
<><View>
    

    
    </View></>

    )
}
export default Map;