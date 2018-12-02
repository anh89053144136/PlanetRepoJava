package planetrepo.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

@Controller
@SessionAttributes("roles")
public class ViewController {
/*
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView Home() {
		ModelAndView mav = new ModelAndView("/WEB-INF/index.jsp");
        return mav;
	}
	*/
	@RequestMapping(value = "/views/file.detail.component", method = RequestMethod.GET)
	public ModelAndView FileDetails() {
		ModelAndView mav = new ModelAndView("/WEB-INF/file.detail.component.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/files.component", method = RequestMethod.GET)
	public ModelAndView FileList() {
		ModelAndView mav = new ModelAndView("/WEB-INF/files.component.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/welcome", method = RequestMethod.GET)
	public ModelAndView Welcome() {
		ModelAndView mav = new ModelAndView("/WEB-INF/welcome.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/charts", method = RequestMethod.GET)
	public ModelAndView Charts() {
		ModelAndView mav = new ModelAndView("/WEB-INF/charts.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/feedback", method = RequestMethod.GET)
	public ModelAndView Feedback() {
		ModelAndView mav = new ModelAndView("/WEB-INF/feedback.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/registration", method = RequestMethod.GET)
	public ModelAndView Registration() {
		ModelAndView mav = new ModelAndView("/WEB-INF/registration.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/successfulregistration", method = RequestMethod.GET)
	public ModelAndView SuccessfulRegistration() {
		ModelAndView mav = new ModelAndView("/WEB-INF/successfulregistration.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/chartcandles", method = RequestMethod.GET)
	public ModelAndView ChartCandles() {
		ModelAndView mav = new ModelAndView("/WEB-INF/chartcandles.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/views/accessdenied", method = RequestMethod.GET)
	public ModelAndView AccessDenied() {
		ModelAndView mav = new ModelAndView("/WEB-INF/accessdenied.jsp");
        return mav;
	}
	
	@RequestMapping(value = "/testwebsocket", method = RequestMethod.GET)
	public ModelAndView TestWebSocket() {
		ModelAndView mav = new ModelAndView("/WEB-INF/TestWebSocket.jsp");
        return mav;
	}
}
