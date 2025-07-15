import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 16,fontFamily: "timesnewroman",fontWeight: "bold",}}>
            SUJAL KAMANNA
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => Linking.openURL("tel:+919325309121")}>
            <Text>+91-9325309121</Text>
          </TouchableOpacity>

          <Text> | </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:sujalkamanna2003@gmail.com")}
          >
            <Text>sujalkamanna2003@gmail.com</Text>
          </TouchableOpacity>

          <Text> | </Text>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/sujalkamanna")
            }
          >
            <Text>LinkedIn: sujalkamanna</Text>
          </TouchableOpacity>

          <Text> | </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/sujalkamanna")}
          >
            <Text>GitHub: sujalkamanna</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}> EDUCATION</Text>
        </View>
        <View>
          <Text>RMD Sinhgad Technical Institute Campus </Text>
        </View>
        <View>
          <Text>Pune,Maharashtra</Text>
        </View>
        <View>
          <Text>BE in Computer Science | CGPA: 7.88 </Text>
        </View>
        <View>
          <Text>2021</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Nirmal Bethany Jr Collage</Text>
        </View>
        <View>
          <Text>Pune,Maharashtra</Text>
        </View>
        <View>
          <Text>HSC | PERCENTAGE 87.33 </Text>
        </View>
        <View>
          <Text>2021</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Sanjeevan Public School</Text>
        </View>
        <View>
          <Text>Kolhapur,Maharashtra</Text>
        </View>
        <View>
          <Text>SSC | PERCENTAGE 86.80 </Text>
        </View>
        <View>
          <Text>2019</Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}> PROFILE SUMMARY</Text>
        </View>
        <View>
          <Text>
            Python Developer with expertise in Data Analysis and scalable web
            development. Skilled in Power BI visualization and Agile
            methodologies, with a strong ability to collaborate on innovative
            software solutions.
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}>PROFESSIONAL EXPERIENCE</Text>
        </View>
        <View>
          <Text>Web Developer Intern Python-Django</Text>
        </View>
        <View>
          <Text>Pune,Maharashtra</Text>
        </View>
        <View>
          <Text>Elite Softwares</Text>
        </View>
        <View>
          <Text>Dec 2023 – Jan 2024</Text>
        </View>
        <View>
          Developed Django web apps, optimizing performance and delivering
          impactful solutions.Collaborated with senior developers to enhance
          teamwork and launch successful websites.
        </View>

        <View>
          <Text>Data Visualization Intern</Text>
        </View>
        <View>
          <Text>Infosys</Text>
        </View>
        <View>
          <Text>Elite Softwares</Text>
        </View>
        <View>
          <Text>Feb 2025 - Mar 2025</Text>
        </View>
        <View>
          <Text>
            Successfully completed a project-based internship at Infosys
            Springboard on Air Quality Index (AQI) Visualization, involving data
            analysis, visualization techniques, and interpretation of AQI
            trends.
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}>PROJECTS</Text>
        </View>
        <View>
          <Text>Django Employee Database</Text>
        </View>
        <View>
          <Text>
            Developed a Django-based Employee Management System to streamline
            and manage employee data within an organization, improving
            efficiency and data accessibility.
          </Text>
        </View>

        <View>
          <Text>Blinkit Sales Analysis Power BI Dashboard</Text>
        </View>
        <View>
          <Text>
            Developed a Power BI dashboard to analyze sales data for Blinkit,
            enhancing decision-making by providing insightful visualizations and
            reports.
          </Text>
        </View>

        <View>
          <Text>Portfolio Website</Text>
        </View>
        <View>
          <Text>
            Developed a responsive portfolio website with HTML, CSS, and
            JavaScript, featuring smooth navigation, interactive project
            sections, and seamless performance across devices.
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}>PUBLICATIONS / RESEARCH PAPERS</Text>
        </View>
        <View>
          <Text>
            Decentralized Funding Solutions: A Blockchain Approach to
            Crowdfunding - Link
          </Text>
        </View>
        <View>
          <Text>
            International Research Journal of Modernization in Engineering
            Technology and Science
          </Text>
        </View>
        <View>
          <Text>January 2025</Text>
        </View>
        <View>
          <Text>
            The paper explores how blockchain can address issues in traditional
            crowdfunding, proposing decentralized platforms and smart contracts
            to reduce fees, increase transparency, and enhance security and
            efficiency.
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}>CERTIFICATIONS</Text>
      </View>
      <View>
        <Text>
          NPTEL Introduction to Machine Learning, NPTEL Python for Data Science,
          Human Resource Management - HR Metrics, C/C++ Certification, Git and
          Github Bootcamp, TechA Data Analytics Using Power BI ,Business Analyst
          and Project Manager Collaboration,TCS Ion Introduction to Soft Skills,
          TCS Ion Basics of Customer Services, ,Microsoft Excel and Advance
          Excel.
        </Text>
      </View>
            

      <View>
        <View>
          <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10 }}>SKILLS</Text>
        </View>
        <View>
          <Text >
            Programming Languages : Python, Java (Core), C/C++, SQL, HTML/CSS,
            Django,OOP.
          </Text>
        </View>
        <View>
          <Text>
            Languages Frameworks & Libraries : Django, HTML/CSS, Bootstrap,
            Pandas, NumPy,Streamlit
          </Text>
        </View>
        <View>
          <Text>
            Tools : MS-Office ,VS Code, Eclipse, Pycharm, Git, GitHub,
            Bootstrap, PIP, CMD, Linux, Windows, SDLC, Agile,Versioning, Version
            Controlling, Excel (VLOOKUP ,PIVOT Tables,PIVOT Charts), Advance
            Excel, Power Query, Power Pivot, Power BI.
          </Text>
        </View>
        <View>
          <Text>
            Soft Skills : Professionalism ,Problem Solving, Communication,
            Presentation, Team Collaboration, Adaptability ,Time
            Management,Social Media Management,Project Management,Tech Support,
            IT Support, Consulting, Data Analysis, Dashboard Creation,
            Management ,Talent Acquisition ,Technical Recruitment, Data Entry,
            Data Management ,Customer Service, Client Support, Document
            Preparation ,Editing, Presentations.
          </Text>
        </View>
        <View>
          <Text>
            Languages : English (Fluent), Hindi (Fluent), Marathi (Fluent),
            Kannada (Fluent), German (Basic).
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
