export default function charSkill(person) {
    const result = [];
    for (const skill of person.special) {
        const {id, name, icon, description = 'Описание засекречено'} = skill;
        result.push({id, name, icon, description});
    }
    return result;
}