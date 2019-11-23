import { addClubName, addPlatform, addClubIds } from "./apiparams";
import { compose } from 'ramda'

test('Add clubName Respect to empty Obj', () => {
    const obj = {};
    const st = addClubName("respect")(obj);
    expect(st.clubName).toBe("respect");
});

test('Add platform ps4 to empty Obj', () => {
    const obj = {};
    const st = addPlatform("ps4")(obj);
    expect(st.platform).toBe("ps4");
});

test('Add clubIds 8818 to empty Obj', () => {
    const obj = {};
    const st = addClubIds("8818")(obj);
    expect(st.clubIds).toBe("8818");
});


test('Add platform ps4 and clubsid 8818 to empty Obj', () => {
    const obj = {};
    const st = compose(addClubIds("8818"),addPlatform("ps4"))(obj);
    expect(st.clubIds).toBe("8818");
    expect(st.platform).toBe("ps4");
});
