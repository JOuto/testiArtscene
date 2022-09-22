

import MapboxGL from "@rnmapbox/maps";
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken("pk.eyJ1Ijoiam91dG8iLCJhIjoiY2wwaDB0aGJ4MDJ3YzNjcndtZ2JyM3NxdyJ9.ImMrVeiT_7jxnKKUKZ6nIg");
/* MapboxGL.setConnected(true); */
import { StyleSheet, View } from "react-native";






console.log("moro")

const Map = () => {
    const styles = StyleSheet.create({
        page: {
          flex: 1,
         paddingTop: 200,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF"
        },
        container: {
          height: 300,
          width: 300,
          backgroundColor: "gray"
        },
        map: {
          flex: 1
          
        }
      });

    return (
<><View style={styles.page}>
    
<View style={styles.container}>
<MapboxGL.MarkerView />
        <MapboxGL.MapView style={styles.map}
        logoEnabled={false} ><MapboxGL.Camera zoomLevel={10}
        centerCoordinate={[23.760954,61.497753 ]} /></MapboxGL.MapView> 
      </View>
    
    </View></>

    )
}
export default Map;