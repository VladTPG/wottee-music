import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Authentication from "../components/Authentication.component.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Authentication">
                <Authentication/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews