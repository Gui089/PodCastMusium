import { IconProps } from "../Components/Icon/Icon";
import { AppTabBottomTabParams } from "./AppTabNav";

export const AppIconBottom: Record<keyof AppTabBottomTabParams, {
    label: string,
    icon: IconProps['name']
}> = {
    HomeScreen: {
        label: 'Home',
        icon:'homeIcon'
    },
    ExploreScreen: {
        label:'Explore',
        icon: 'searchIcon'
    },
    LibaryScreen: {
        label:'Libary',
        icon: 'folderIcon'
    }
}