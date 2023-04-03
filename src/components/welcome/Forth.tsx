import cloud from "../../assets/icons/cloud.svg";
import s from "./WelcomeLayout.module.scss";
import { WelcomeLayout } from "./WelcomeLayout";
import { RouterLink } from "vue-router";
export const Forth = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={cloud} />,
            title: () => (
                <h2>
                    云备份
                    <br />
                    再也不怕数据丢失
                </h2>
            ),
            buttons: () => (
                <>
                    <RouterLink class={s.fake} to="/start">
                        跳过
                    </RouterLink>
                    <RouterLink to="/start">完成</RouterLink>
                    <RouterLink class={s.fake} to="/start">
                        跳过
                    </RouterLink>
                </>
            ),
        }}
    </WelcomeLayout>
);

Forth.displayName = "Forth";
