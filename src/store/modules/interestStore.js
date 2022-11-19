import {createInterest, deleteInterest, isExist} from "@/api/interest";

const interestStore = {
    namespaced: true,

    state: {},
    getters: {},
    actions: {
        async createInterest({commit}, aptCode) {
            console.log(aptCode);

            let status = false;
            await createInterest(aptCode,
                async ({data}) => {
                    alert("등록에 성공하였습니다.");
                    status = true;
                },
                (error) => {
                    status = false;
                });
            return status;
        },

        async deleteInterest({commit}, aptCode) {
            let status = false;
            await deleteInterest(aptCode,
                ({data}) => {
                    alert("삭제에 성공하였습니다.");
                    status = true;
                })
            return status;
        },

        async isExist({commit}, aptCode) {
            let status = false;
            await isExist(aptCode,
                ({data}) => {
                    if (data.msg === "true")
                        status = true;
                })
            console.log(status);
            return status;
        }
    },
    mutations: {},
};

export default interestStore;
