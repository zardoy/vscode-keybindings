import { modifyPackageJsonFile } from 'modify-json-file'

modifyPackageJsonFile({ dir: '.' }, modifyProperties => {
    //@ts-ignore
    packageJson.contributes.keybindings = packageJson.contributes.keybindings.map(({ key, mac, ...rest }) => {
        const keyChords = key.split(' ')
        keyChords
        return {
            ...rest,
        }
    })
    return modifyProperties
})
