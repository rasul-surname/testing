export default function validateValue(value) {
    if(value < 0 || value > 100) {
        return false;
    }
    return true;
}