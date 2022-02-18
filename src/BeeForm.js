import buffTailedBumble from './icons/buffTailedBumble.svg';
import commonCarderBee from './icons/commonCarderBee.svg';
import hairyFootedFlowerBee from './icons/hairyFootedFlowerBee.svg';
import redMasonBee from './icons/redMasonBee.svg';
import redTailedBumblebee from './icons/redTailedBumblebee.svg';
import tawnyMiningBee from './icons/tawnyMiningBee.svg';
import treeBumblebee from './icons/treeBumblebee.svg';
import whiteTailedBumblebee from './icons/whiteTailedBumblebee.svg';
import willughbysLeafCuttterBee from './icons/willughbysLeafCuttterBee.svg';
import woolCarderBee from './icons/woolCarderBee.svg';

const bees = ['buffTailedBumble', 'commonCarderBee', 'hairyFootedFlowerBee', 'redMasonBee', 'redTailedBumblebee', 'tawnyMiningBee', 'treeBumblebee', 'whiteTailedBumblebee', 'willughbyLeafCuttterBee', 'woolCarderBee']


const BeeForm = () => {
    return (
        <div class="beeForm">
            <p id="heading">You saved a Bee?</p>
            <form>
                <p>What type of bee was it?</p>
                <label for="buffTailedBumble">
                    <img src={buffTailedBumble}>
                    </img>
                    <input type="radio" id="buffTailedBumble" name="beeType" value="buffTailedBumble">
                    </input>
                </label>
                <label for="commonCarderBee">
                    <img src={commonCarderBee}>
                    </img>
                    <input type="radio" id="commonCarderBee" name="beeType" value="commonCarderBee">
                    </input>
                </label>
                <label for="hairyFootedFlowerBee">
                    <img src={hairyFootedFlowerBee}>
                    </img>
                    <input type="radio" id="hairyFootedFlowerBee" name="beeType" value="hairyFootedFlowerBee">
                    </input>
                </label>
                <label for="redMasonBee">
                    <img src={redMasonBee}>
                    </img>
                    <input type="radio" id="redMasonBee" name="beeType" value="redMasonBee">
                    </input>
                </label>
                <label for="redTailedBumblebee">
                    <img src={redTailedBumblebee}>
                    </img>
                    <input type="radio" id="redTailedBumblebee" name="beeType" value="redTailedBumblebee">
                    </input>
                </label>
                <label for="tawnyMiningBee">
                    <img src={tawnyMiningBee}>
                    </img>
                    <input type="radio" id="tawnyMiningBee" name="beeType" value="tawnyMiningBee">
                    </input>
                </label>
                <label for="treeBumblebee">
                    <img src={treeBumblebee}>
                    </img>
                    <input type="radio" id="treeBumblebee" name="beeType" value="treeBumblebee">
                    </input>
                </label>
                <label for="whiteTailedBumblebee">
                    <img src={whiteTailedBumblebee}>
                    </img>
                    <input type="radio" id="whiteTailedBumblebee" name="beeType" value="whiteTailedBumblebee">
                    </input>
                </label>
                <label for="willughbysLeafCuttterBee">
                    <img src={willughbysLeafCuttterBee}>
                    </img>
                    <input type="radio" id="willughbysLeafCuttterBee" name="beeType" value="willughbysLeafCuttterBee">
                    </input>
                </label>
                <label for="woolCarderBee">
                    <img src={woolCarderBee}>
                    </img>
                    <input type="radio" id="woolCarderBee" name="beeType" value="woolCarderBee">
                    </input>
                </label>
                <input type="submit" value="Submit">
                </input>
            </form>
        </div >
    )
};


export default BeeForm;