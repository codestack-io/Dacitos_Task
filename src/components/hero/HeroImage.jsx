"use client";

import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Users,
  Wallet,
  Bell,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import FloatingCard from "./FloatingCards";

const stats = [
  {
    icon: Building2,
    value: "248",
    label: "Properties",
  },
  {
    icon: Users,
    value: "1,842",
    label: "Guests",
  },
  {
    icon: Wallet,
    value: "£98K",
    label: "Revenue",
  },
];


const bookings = [
  {
    name: "Royal Apartment",
    status: "Confirmed",
    date: "Today",
  },
  {
    name: "Skyline Hotel",
    status: "Pending",
    date: "Tomorrow",
  },
];


export default function HeroImage() {

  return (

    <motion.div

      initial={{
        opacity:0,
        x:80,
        scale:.95,
      }}

      animate={{
        opacity:1,
        x:0,
        scale:1,
      }}

      transition={{
        duration:.8,
        ease:"easeOut",
      }}


      className="
        relative
        mx-auto
        w-full
        max-w-[650px]
      "

    >


      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-amber-400/20
          blur-[120px]
        "
      />



      {/* Dashboard */}

      <motion.div

        whileHover={{
          y:-8,
        }}

        className="
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[#0d1424]/90
          shadow-[0_40px_100px_rgba(0,0,0,.5)]
          backdrop-blur-xl
        "

      >


        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-5
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-amber-400
                to-orange-600
              "
            >

              <Building2
                className="text-white"
              />

            </div>


            <div>

              <h3 className="font-semibold text-white">
                Amaze PMS
              </h3>

              <p className="text-xs text-white/50">
                Property Dashboard
              </p>

            </div>

          </div>



          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white/5
            "
          >

            <Bell
              size={18}
              className="text-white"
            />

          </div>


        </div>






        {/* Stats */}


        <div
          className="
            grid
            grid-cols-3
            gap-4
            p-6
          "
        >

          {
            stats.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  key={item.label}

                  initial={{
                    opacity:0,
                    y:20
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*.15
                  }}


                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "

                >

                  <Icon
                    size={20}
                    className="text-amber-400"
                  />

                  <h4
                    className="
                      mt-4
                      text-xl
                      font-bold
                      text-white
                    "
                  >

                    {item.value}

                  </h4>


                  <p
                    className="
                      text-xs
                      text-white/50
                    "
                  >

                    {item.label}

                  </p>


                </motion.div>

              )


            })
          }

        </div>







        {/* Revenue Chart */}

        <div
          className="
            mx-6
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
            "
          >

            <div>

              <p className="text-sm text-white/50">
                Monthly Revenue
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >

                £98,450

              </h3>


            </div>


            <div
              className="
                rounded-full
                bg-emerald-500/20
                px-3
                py-1
                text-xs
                text-emerald-400
              "
            >

              +18%

            </div>


          </div>



          <div
            className="
              mt-8
              flex
              h-32
              items-end
              gap-3
            "
          >

            {
              [40,65,50,80,60,95,75].map(
                (height,i)=>(

                  <motion.div

                    key={i}

                    initial={{
                      height:0
                    }}

                    animate={{
                      height:`${height}%`
                    }}

                    transition={{
                      delay:i*.1
                    }}


                    className="
                      flex-1
                      rounded-t-xl
                      bg-gradient-to-t
                      from-amber-500
                      to-yellow-300
                    "

                  />

                )
              )
            }


          </div>


        </div>







        {/* Booking List */}

        <div
          className="
            m-6
            space-y-3
          "
        >

          {
            bookings.map(item=>(

              <div
                key={item.name}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                "
              >

                <div>

                  <p className="text-sm text-white">
                    {item.name}
                  </p>

                  <p className="text-xs text-white/50">
                    {item.date}
                  </p>

                </div>



                <span
                  className="
                    rounded-full
                    bg-emerald-500/20
                    px-3
                    py-1
                    text-xs
                    text-emerald-400
                  "
                >

                  {item.status}

                </span>


              </div>

            ))
          }


        </div>


      </motion.div>



      {/* Floating growth card */}

      <motion.div

        animate={{
          y:[0,-10,0]
        }}

        transition={{
          duration:4,
          repeat:Infinity
        }}


        className="
          absolute
          -right-5
          top-20
          hidden
          rounded-2xl
          border
          border-white/10
          bg-[#111827]
          p-4
          shadow-xl
          md:block
        "
      >

</motion.div>
      {/* Floating Card - Left */}
<FloatingCard
  icon={ShieldCheck}
  title="24/7 Support"
  subtitle="Emergency Service"
  value="Always On"
  badge="Online"
  delay={0}
  className="absolute -left-12 top-10 hidden xl:block"
/>

{/* Floating Card - Right Top */}
<FloatingCard
  icon={Zap}
  title="Power Efficiency"
  subtitle="Energy Saving"
  value="32%"
  gradient="from-violet-500 to-fuchsia-500"
  delay={0.4}
  className="absolute -right-14 top-24 hidden xl:block"
/>

{/* Floating Card - Right Bottom */}
<FloatingCard
  icon={Wrench}
  title="Maintenance"
  subtitle="Completed Jobs"
  value="1,250+"
  gradient="from-cyan-500 to-blue-600"
  delay={0.8}
  className="absolute -right-10 bottom-10 hidden xl:block"
/>



    </motion.div>

  );
}